import React from 'react'

const UseHook = ({ hook, hookValue, children, ...props }) => {
  const useHook = hook;
  const hooked = useHook(hookValue);

  return children(hooked, ...props);
};

export default UseHook;
