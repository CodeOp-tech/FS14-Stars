import React, {useState, useEffect} from "react";


function AddExercise () {

   // let [exercise, setExercise] = useState([]); 
    let [input, setInput] = useState({});

    //then i want the form to reset 
  
    // useEffect(() => {
    //   getStudents();
    // }, []);
  
    // const getStudents = () => {
    //   fetch("/students")
    //     .then(response => response.json())
    //     .then(students => {
    //       console.log(students);
    //       setStudents(students);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // };



  
    function handleSubmit(e) {
      e.preventDefault();
      addExercise();
      console.log("hello");
     
    }

    const handleChange = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log(input);
      };

  
      const addExercise = () => {
          console.log(input)
        try {
          fetch("/exercises", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(input), //(exercise) //{ category, title, level }
            
          });
        } catch (error) {
          console.log(error);
        }
        
        // getStudents(); //going to display all students
      };
    
      //add a console log 
      //is there somewhere where im missing the req.body.params?

    
        return (
            <div> 
                <div className="Form">
                <form onSubmit={handleSubmit}>
                    <label>Category:</label>
                        <input
                        type="text"
                        name="category"
                       // value={exercise.category}
                        onChange={e => handleChange(e)}
                    />

                    <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                          // value={exercise.title}
                            onChange={e => handleChange(e)}
                        />

                    <label>Level:</label>
                        <input
                            type="text"
                            name="level"
                         //  value={exercise.level}
                            onChange={e => handleChange(e)}
                        />

                    
                    <button type="submit">Add Exercise</button>
                    </form>
                </div>


            </div>
        )
    }
    
    export default AddExercise;