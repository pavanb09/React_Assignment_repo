let names = ["Arya","Rahul","Aisha","Kiran"];

export default function StudentList(){
    return(

<>
<h1>StudentList Map Rendering</h1>
        <ul type = "circle">
            {
                names.map((name,index) =>(
                    <li key={index}>{name}</li>
                ))
            }
        </ul>
</>
    )
}