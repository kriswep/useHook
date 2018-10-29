// pass in the hook you wanna use and its value, receive a renderprop with its' values!
const UseHook = ({ hook, hookValue, children, ...props }) => {
  const useHook = hook;
  const hooked = useHook(hookValue);

  return children(hooked, ...props);
};

export default UseHook;
