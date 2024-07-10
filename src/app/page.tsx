import GiftForm from '../components/gift-form'

export default async function HomePage() {
  return (
    <div className='bg-blue-500 h-[500px]'>
      <div className='relative mx-auto max-w-7xl'>
        <h1 className='text-6xl font-bold text-white max-w-[500px] leading-[72px] py-32'>Generador de regalos con ia</h1>
        <GiftForm />
      </div>
    </div>
  )
}
