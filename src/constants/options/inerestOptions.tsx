import FavorLabel from 'src/features/auth/components/FavorLabel'

const interestOptions = [
  {
    label: <FavorLabel icon={'food'} label={'맛집'} />,
    value: '맛집',
  },
  {
    label: <FavorLabel icon={'shopping'} label={'쇼핑'} />,
    value: '쇼핑',
  },
  {
    label: <FavorLabel icon={'tour'} label={'관광'} />,
    value: '관광',
  },
  {
    label: <FavorLabel icon={'photo'} label={'사진'} />,
    value: '사진',
  },
  {
    label: <FavorLabel icon={'activity'} label={'액티비티'} />,
    value: '액티비티',
  },
  {
    label: <FavorLabel icon={'drink'} label={'술/파티'} />,
    value: '술/파티',
  },
  {
    label: <FavorLabel icon={'healing'} label={'힐링'} />,
    value: '힐링',
  },
  {
    _label: <FavorLabel icon={'friend'} label={'친목'} />,
    get label() {
      return this._label
    },
    set label(value) {
      this._label = value
    },
    value: '친목',
  },
]
export default interestOptions
