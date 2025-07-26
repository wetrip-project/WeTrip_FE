'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import Image from 'next/image'
import Icon from '@/components/Icon/icon'
import { useDrag, useDrop, DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

interface ImageItem {
  id: string
  url: string
  file: File
}

interface DraggableImageProps {
  image: ImageItem
  index: number
  moveImage: (dragIndex: number, hoverIndex: number) => void
  onDelete: (id: string) => void
  isRepresentative: boolean
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
}

/* 이미지 드래그앤드롭 컴포넌트 */
const DraggableImage = ({
  image,
  index,
  moveImage,
  onDelete,
  isRepresentative,
  scrollContainerRef,
}: DraggableImageProps) => {
  const ref = useRef<HTMLDivElement>(null)

  /* Drop 영역 정의 (다른 이미지를 이 영역 위로 끌어오면 위치 바뀌도록) */
  const [, drop] = useDrop({
    accept: 'image',
    hover(item: { index: number }, monitor) {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      const hoverBoundingRect = ref.current.getBoundingClientRect()
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2
      const clientOffset = monitor.getClientOffset()
      if (!clientOffset) return
      const hoverClientX = clientOffset.x - hoverBoundingRect.left

      /* 드래그 방향에 따라 위치 변경 조건 설정 */
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) return
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) return

      /* 실제 위치 이동 */
      moveImage(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  /* Drag 설정 */
  const [{ isDragging }, drag] = useDrag({
    type: 'image',
    item: { id: image.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref)) // 드래그 앤 드롭 동시 적용

  // 자동 스크롤 처리 (드래그 중 마우스 위치가 스크롤 끝에 가까우면 자동 스크롤)
  useEffect(() => {
    if (!scrollContainerRef.current) return
    const scrollEl = scrollContainerRef.current

    function handleDragOver(e: MouseEvent) {
      if (!scrollEl) return
      const rect = scrollEl.getBoundingClientRect()
      const scrollLeft = scrollEl.scrollLeft
      const scrollWidth = scrollEl.scrollWidth
      const clientX = e.clientX

      const edgeThreshold = 80 // 80px 근처에서 자동 스크롤 시작
      const scrollSpeed = 20

      if (clientX > rect.right - edgeThreshold) {
        // 오른쪽 끝 근처
        if (scrollLeft + rect.width < scrollWidth) {
          scrollEl.scrollBy({ left: scrollSpeed, behavior: 'smooth' })
        }
      } else if (clientX < rect.left + edgeThreshold) {
        // 왼쪽 끝 근처
        if (scrollLeft > 0) {
          scrollEl.scrollBy({ left: -scrollSpeed, behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('dragover', handleDragOver)

    return () => {
      window.removeEventListener('dragover', handleDragOver)
    }
  }, [scrollContainerRef])

  return (
    <div
      ref={ref}
      className={`border-t5 relative cursor-move rounded-md border select-none ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      style={{ width: 56, height: 56 }}
    >
      {isRepresentative && (
        <span className='absolute bottom-0 left-0 w-full rounded-b-md bg-[#212221B2] px-1 py-0.5 text-center text-[10px] text-white'>
          대표사진
        </span>
      )}

      <Image
        src={image.url}
        alt={`Image ${index + 1}`}
        width={56}
        height={56}
        className='h-full w-full rounded-md object-cover'
        draggable={false}
      />

      <button
        type='button'
        onClick={() => onDelete(image.id)}
        className='absolute -top-1 -right-1 z-20 cursor-pointer'
        aria-label='이미지 삭제'
      >
        <Icon iconName='Delete' />
      </button>
    </div>
  )
}

/* 이미지 업로드 메인 컴포넌트 */
const ImageUpload = () => {
  const { setValue, watch } = useFormContext()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [images, setImages] = useState<ImageItem[]>([])

  useEffect(() => {
    const initialFiles = watch('images') as File[] | undefined
    if (initialFiles && initialFiles.length > 0) {
      const loaded = initialFiles.map((file) => ({
        id: URL.createObjectURL(file),
        url: URL.createObjectURL(file),
        file,
      }))
      setImages(loaded)
    }
  }, [watch])

  const syncWithForm = (items: ImageItem[]) => {
    setImages(items)
    setValue(
      'images',
      items.map((item) => item.file),
      { shouldValidate: true },
    )
  }

  /* 이미지 선택 시 실행 */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const filesArray = Array.from(e.target.files).slice(0, 10 - images.length)

    const newImages = filesArray.map((file) => ({
      id: URL.createObjectURL(file),
      url: URL.createObjectURL(file),
      file,
    }))

    const combined = [...images, ...newImages].slice(0, 10)
    syncWithForm(combined)
    e.target.value = ''
  }

  /* 이미지 삭제 */
  const handleDelete = (id: string) => {
    const filtered = images.filter((img) => img.id !== id)
    syncWithForm(filtered)
  }

  /* 이미지 드래그를 통한 위치 변경 */
  const moveImage = useCallback(
    (from: number, to: number) => {
      const updated = [...images]
      const [moved] = updated.splice(from, 1)
      updated.splice(to, 0, moved)
      syncWithForm(updated)
    },
    [images],
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='flex items-start gap-[8px]'>
        {/* 이미지 업로드 */}
        <label className='border-stroke2 text-t2 font-12r flex h-[56px] w-[56px] shrink-0 cursor-pointer flex-col items-center justify-center rounded-md border'>
          <Icon iconName={`Camera_24`} />
          <span className='font-12r'>{images.length} / 10</span>
          <input
            type='file'
            accept='image/*'
            multiple
            onChange={handleFileChange}
            className='hidden'
            disabled={images.length >= 10}
          />
        </label>

        {/* 이미지 리스트  */}
        <div className='max-w-full overflow-x-auto' ref={scrollContainerRef}>
          <div className='flex w-max gap-[8px]'>
            {images.map((image, index) => (
              <DraggableImage
                key={image.id}
                image={image}
                index={index}
                moveImage={moveImage}
                onDelete={handleDelete}
                isRepresentative={index === 0}
                scrollContainerRef={scrollContainerRef}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  )
}

export default ImageUpload
