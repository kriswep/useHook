// pass in the hook you wanna use and its value, receive a renderprop with its' values!
const UseHook = ({ hook: [useHook, ...hookValues], children, ...props }) => {
  const hooked = useHook(...hookValues);

  return children(hooked, ...props);
};

export default UseHook;
