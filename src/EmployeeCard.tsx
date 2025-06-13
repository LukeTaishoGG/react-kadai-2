//子要素Page
type EmployeeCardProps = {
  icon: string;
  name: string;
  post: string;
  email: string;
}
const EmployeeCard = ({ icon,name,post,email }:EmployeeCardProps) => {
  return (
    <div className="name-card">
      <div className="employee-card">
        <img src={icon} alt={name} />
          <div className="profile">
            <p className="employee-name">{name}</p>
            <p>{post}</p>
            <p>{email}</p>
          </div>
      </div>
    </div>
  );
};
export default EmployeeCard;