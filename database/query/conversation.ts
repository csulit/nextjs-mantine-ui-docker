import db from '..';

export const findOne = async (conversationId: number) => {
  const conversation = await db.query.conversation.findFirst({
    where: (c, { eq }) => eq(c.id, conversationId),
    with: {
      messages: {
        with: {
          sender: true,
          attachments: true,
        },
      },
      customer: true,
      supportAgent: true,
    },
  });

  if (!conversation) {
    return null;
  }

  return conversation;
};
