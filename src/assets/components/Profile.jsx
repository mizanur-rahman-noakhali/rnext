// export default function Profile(props) {
//   return (
//     <div>
//       <Avatar {...props} />
//       <Info age={props.age} />
//     </div>
//   );
// }
export default function Profile({ children }) {
  return <div>{children}</div>;
}
