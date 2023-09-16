const Shimmer = () => {
  return (
    <div className="w-[100vw] flex flex-wrap">
        {
            Array(12).fill('').map((e) => <div className='rounded-md w-[25rem] h-[17rem]  mx-2 my-3 bg-gray-600'></div>)
        }
    </div>
  )
}

export default Shimmer
