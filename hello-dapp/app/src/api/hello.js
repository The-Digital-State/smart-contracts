export const hello = async ({ program }) => {
  const result = await program.rpc.hello({});
  return result;
};
