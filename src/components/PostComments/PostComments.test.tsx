// src/components/PostComments/PostComments.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostComment from '.';

describe('Teste de inserção de comentários no PostComment', () => {
  it('Deve inserir dois comentários e renderizá-los corretamente', async () => {
    render(<PostComment />);
    const user = userEvent.setup();

    // Seleciona input e botão pelo data-testid
    const input = screen.getByTestId('comment-input');
    const button = screen.getByTestId('comment-button');

    // Primeiro comentário
    await user.type(input, 'Primeiro comentário');
    await user.click(button);

    // Segundo comentário
    await user.type(input, 'Segundo comentário');
    await user.click(button);

    // Verifica se os comentários apareceram na tela
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
  });
});
