interface Props {
  children?: React.ReactNode;
}

export const Example = ({ children }: Props) => {
  return <div>{children}</div>;
};
