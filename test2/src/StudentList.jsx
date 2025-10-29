let names = ["Arya","Rahul","Aisha","Kiran"];

export default function StudentList(){
    return(

        <ul type = "circle">
            {
                names.map((name,index) =>(
                    <li key={index}>{name}</li>
                ))
            }
        </ul>
    )
}