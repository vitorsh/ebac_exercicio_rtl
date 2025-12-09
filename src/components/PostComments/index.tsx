// src/components/PostComments/index.tsx
import { useState } from 'react';

export default function PostComment() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        data-testid="comment-input" // necessário para o teste
      />
      <button onClick={handleAddComment} data-testid="comment-button">
        Comentar
      </button>

      <div>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
}
