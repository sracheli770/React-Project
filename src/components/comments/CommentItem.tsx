import { Comments } from '../../@types/types'
import css from './CommentsItem.module.scss'
import { BsPencil, BsTrash } from "react-icons/bs";
import { deleteComment } from '../../features/commentsSlice'
import { useAppDispatch } from '../../app/hooks';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CommentItem = ({ name = 'אורח', comment, id }: Comments) => {
    const dispatch = useAppDispatch()
    const nav = useNavigate()

    return (
        <div className={`card m-2 ${css.card}`} style={{ backgroundColor: '#fbf8ee' }}>
            <div className="card-body">
                <h4 className='card-title'>{name}</h4>
                <p className='card-text pb-4'>{comment}</p>
                <button className="btn" onClick={() => { nav(`/comments/edit/${id}`) }} style={{ position: 'absolute', bottom: '20px', right: '100px' }}>
                    <BsPencil color='blue' />
                </button>

                <button dir='rtl' className="btn" style={{ position: 'absolute', bottom: '20px', left: '100px' }}
                    onClick={() => {
                        Swal.fire({
                            title: 'האם אתה בטוח שברצונך למחוק?',
                            showDenyButton: true,
                            confirmButtonText: 'כן',
                            denyButtonText: 'לא',
                            confirmButtonColor: 'green',
                            cancelButtonColor: 'red'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(deleteComment(id))
                                Swal.fire({
                                    title: "התגובה נמחקה בהצלחה",
                                    icon: "success",
                                    confirmButtonColor: "green"
                                })
                            }
                        })

                    }}  >
                    <BsTrash color='red' />
                </button>

            </div>
        </div>
    )
}

export default CommentItem