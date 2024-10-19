export default function BioData({friend}){
   const{name,email}=friend
    return (
        <div className="User">
            <h2>Name:{name}</h2>
            <h4>Email:{email}</h4>
        </div>
    )
}