import pic from '../assets/commentpic.png';
const commentData = [
    {
         name : 'Alex Benjamin',
         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
         replies : []
    },
    {
        name : "User",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
        replies : [
            {
                name : 'User',
                desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                replies : [
                    {
                         name : 'User',
                         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                         replies : []
                    }
                ]
            }
        ]
    },
    {
         name : 'User',
         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
         replies : []
    },
    {
         name : 'User',
         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
         replies : [
                    {
                         name : 'User',
                         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                         replies : []
                    },
                                        {
                         name : 'User',
                         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                         replies : []
                    }
         ]
    },
    {
         name : 'User',
         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
         replies : []
    },
        {
         name : 'User',
         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
         replies : [
                    {
                         name : 'User',
                         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                         replies : []
                    },
                                        {
                         name : 'User',
                         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                         replies : [

                                                  {
                         name : 'User',
                         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                         replies : []
                    },
                                        {
                         name : 'User',
                         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                         replies : [
                              
                         ]
                    }
                         ]
                    }
         ]
    },
    {
                         name : 'User',
                         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                         replies : []
                    },
                                        {
                         name : 'User',
                         desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                         replies : []
                    }
];


const Comment = ({comment}) => {
  return (
    <div className='flex items-center my-3 bg-gray-900 rounded-md px-2 py-5'>
      <img className='h-10' src={pic} alt='profile'/>
      <div className='pl-3'>
        <p className='text-sm font-bold'>{comment.name}</p>
        <p className='text-sm '>{comment.desc}</p>
      </div>
    </div>
  )
}
const CommentsList = ({comments}) => {
    return (
        comments.map((comment, index) => (
        <div className='p-1'>
          <Comment key={index} comment={comment}/>
          <div className=' border-l-2 bg-gray-900 rounded-md pl-5 ml-10'>
               <CommentsList comments={comment.replies}/>
          </div>
        </div>
        ))
    )
}


const CommentContainer = () => {
  return (
    <div className='mt-4'>
       <h1 className='text-white text-xl font-bold'>Comments :</h1>
       {/* <Comment comment={commentData[0]}/> */}
       <CommentsList comments={commentData}/>
    </div>
  )
}

export default CommentContainer;
