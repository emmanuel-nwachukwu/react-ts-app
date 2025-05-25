type UserProps = {
  username: string;
  email: string;
  isVerified: boolean;
};

const UserCard = ({ username, email, isVerified }: UserProps) => {
  // const UserCard = ({ username: string, email: string, isVerified: boolean }) => {
  return (
    <ul>
      <li>👤 {username}</li>
      <li>📧 {email}</li>
      {/* <li>{isVerified ? "✅ Verified" : "❌ Not Verified"}</li> */}
      {isVerified ? <li>✅ Verified</li> : <li>❌ Not verified</li>}
    </ul>
  );
};

export default UserCard;
