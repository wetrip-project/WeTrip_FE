interface Props {
  icon: string
  label: string
}

const FavorLabel = ({ icon, label }: Props) => {
  const src = `/assets/rest/${icon}.png`
  return (
    <div className='flex flex-col items-center gap-[3px]'>
      <img src={src} alt={label} width={24} height={24} />
      <div className='font-16r text-black'>{label}</div>
    </div>
  )
}

export default FavorLabel
