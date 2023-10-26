import React, { useState } from 'react'
import { Form, FormControl, Table } from 'react-bootstrap';
import AddUesr from './addUesr';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Grid = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [ageFirstCriterioa, setAgeFirstCriterioa] = useState([]);
    const [ageFirstCriterioaOrig, setAgeFirstCriterioaOrig] = useState([]);
    const [ageSecondCriterioa, setAgeSecondCriterioa] = useState([]);
    const [ageSecondCriterioaOrig, setAgeSecondCriterioaOrig] = useState([]);
    const [ageThirdCriterioa, setAgeThirdCriterioa] = useState([]);
    const [ageThirdCriterioaOrig, setAgeThirdCriterioaOrig] = useState([]);
    const [ageFourthCriterioa, setAgeFourthCriterioa] = useState([]);
    const [ageFourthCriterioaOrig, setAgeFourthCriterioaOrig] = useState([]);
    const [isChecked, setIsChecked] = useState(false)
    const [isEdit,setisEdit]=useState(false)
    const handleClose = () => {setShowModal(false) 
        setisEdit(false)};
    const handleAddUser = () => {setShowModal(true)
        setisEdit(false)};

    const [userList, setUserList] = useState()
    
    const handleEditUser = () => {
        if(userList !=null){
            setShowModal(true)
            setisEdit(true)
        }
    
    }



    const handleDeleteUser = () => {
        if (userList.age <= 18) {
            const updatedAgeFirstCriterioa = ageFirstCriterioa.filter(item => item.id !== userList.id);
            setAgeFirstCriterioa(updatedAgeFirstCriterioa);
            setShowModal(false)
        } else if (userList.age > 18 && userList.age <= 25) {
           
            const updatedAgeSecondCriterioa = ageSecondCriterioa.filter(item => item.id !== userList.id);
            setAgeSecondCriterioa(updatedAgeSecondCriterioa);
            setShowModal(false)
        }
        else if (userList.age > 25 && userList.age <= 45) {
          
            const updatedAgeThirdCriterioa = ageThirdCriterioa.filter(item => item.id !== userList.id);
            setAgeThirdCriterioa(updatedAgeThirdCriterioa);
            setShowModal(false)
        }
        else if (userList.age > 45) {
          
            const updatedAgeFourthCriterioa = ageFourthCriterioa.filter(item => item.id !== userList.id);
            setAgeFourthCriterioa(updatedAgeFourthCriterioa);
            setShowModal(false)
        }
     

    }

    const handleCheck = (event, item) => {
        let check = event.target.checked
        if(check){
            setUserList(item)  
        }else{
            setUserList(null)  
        }
    }
    const uuid=()=> { 
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) { 
            const r = Math.random() * 16 | 0,  
                v = c == 'x' ? r : (r & 0x3 | 0x8); 
            return v.toString(16); 
        }); 
    }
    const getSavedData = (Obj) => {
        debugger
        if (Obj.age <= 18) {

          let  saveObj={
            id:Obj.id?Obj.id:uuid(),
            name:Obj.name,
            age:Obj.age,
            phone:Obj.phone,
            email:Obj.email
          }
        
          if(Obj.id==saveObj.id){
            const updateAgeFirstCriteria=[...ageFirstCriterioa]
            let periodData=updateAgeFirstCriteria.map((item)=>item?.id==Obj.id?{...item,...Obj} :item)
            setAgeFirstCriterioa(periodData)
           
          }else{
            ageFirstCriterioa.push(saveObj)
            ageFirstCriterioaOrig.push(saveObj)
          }
            setShowModal(false)
        } else if (Obj.age > 18 && Obj.age <= 25) {
            let  saveObj={
                id:Obj.id?Obj.id:uuid(),
                name:Obj.name,
                age:Obj.age,
                phone:Obj.phone,
                email:Obj.email
              }
              if(Obj.id==saveObj.id){
                const updateAgeFirstCriteria=[...ageSecondCriterioa]
                let periodData=updateAgeFirstCriteria.map((item)=>item?.id==Obj.id?{...item,...Obj} :item)
                setAgeSecondCriterioa(periodData)
               
              }else{
                ageSecondCriterioa.push(saveObj)
                ageSecondCriterioaOrig.push(saveObj)
              }
           
            setShowModal(false)
        }
        else if (Obj.age > 25 && Obj.age <= 45) {
            let  saveObj={
                id:Obj.id?Obj.id:uuid(),
                name:Obj.name,
                age:Obj.age,
                phone:Obj.phone,
                email:Obj.email
              }
              if(Obj.id==saveObj.id){
                const updateAgeFirstCriteria=[...ageThirdCriterioa]
                let periodData=updateAgeFirstCriteria.map((item)=>item?.id==Obj.id?{...item,...Obj} :item)
                setAgeThirdCriterioa(periodData)
               
              }else{
                ageThirdCriterioa.push(saveObj)
                ageThirdCriterioaOrig.push(saveObj)
              }

           
            setShowModal(false)
        }
        else if (Obj.age > 45) {
            let  saveObj={
                id:Obj.id?Obj.id:uuid(),
                name:Obj.name,
                age:Obj.age,
                phone:Obj.phone,
                email:Obj.email
              }
              if(Obj.id==saveObj.id){
                const updateAgeFirstCriteria=[...ageFourthCriterioa]
                let periodData=updateAgeFirstCriteria.map((item)=>item?.id==Obj.id?{...item,...Obj} :item)
                setAgeFourthCriterioa(periodData)
               
              }else{
                ageFourthCriterioa.push(saveObj)
                ageFourthCriterioaOrig.push(saveObj)
              }
            setShowModal(false)
        }
       
    }


    const searchitst=(event,item)=>{
        debugger
        let data=event.target.value
        console.log(data)
        if(item <=18){
            if(data.length<=0){
                setAgeFirstCriterioa(ageFirstCriterioaOrig)
            }else{
                const sortedData = [...ageFirstCriterioa];
                if (data) {
                    sortedData.sort((a, b) => {
                      if (a[data] < b[data]) return -1;
                      if (a[data] > b[data]) return 1;
                      return 0;
                    });
                  }
                const updatedAgeFourthCriterioa = sortedData.filter((item) =>
                item.name.toLowerCase().includes(data.toLowerCase())
              );


               // const updatedAgeFourthCriterioa = ageFirstCriterioa.filter(item => item.name.includes(data));
                console.log(updatedAgeFourthCriterioa)
                setAgeFirstCriterioa(updatedAgeFourthCriterioa)
            }
        }else if(item >18 && item <=25){
            if(data.length<=0){
                setAgeSecondCriterioa(ageSecondCriterioaOrig)
            }else{
                const sortedData = [...ageSecondCriterioa];
                if (data) {
                    sortedData.sort((a, b) => {
                      if (a[data] < b[data]) return -1;
                      if (a[data] > b[data]) return 1;
                      return 0;
                    });
                  }
                  const updatedAgeFourthCriterioa = sortedData.filter((item) =>
                item.name.toLowerCase().includes(data.toLowerCase())
              );
                //const updatedAgeFourthCriterioa = ageSecondCriterioa.filter(item => item.name.includes(data));
                console.log(updatedAgeFourthCriterioa)
                setAgeSecondCriterioa(updatedAgeFourthCriterioa)
            } 
        }else if(item >25 && item <=45){
            if(data.length<=0){
                setAgeThirdCriterioa(ageThirdCriterioaOrig)
            }else{
                const sortedData = [...ageThirdCriterioa];
                if (data) {
                    sortedData.sort((a, b) => {
                      if (a[data] < b[data]) return -1;
                      if (a[data] > b[data]) return 1;
                      return 0;
                    });
                  }
                  const updatedAgeFourthCriterioa = sortedData.filter((item) =>
                item.name.toLowerCase().includes(data.toLowerCase())
              );
              //  const updatedAgeFourthCriterioa = ageThirdCriterioa.filter(item => item.name.includes(data));
                console.log(updatedAgeFourthCriterioa)
                setAgeThirdCriterioa(updatedAgeFourthCriterioa)
            } 
        }else if(item >45){
            if(data.length<=0){
                setAgeFourthCriterioa(ageFourthCriterioaOrig)
            }else{
                const sortedData = [...ageFourthCriterioa];
                if (data) {
                    sortedData.sort((a, b) => {
                      if (a[data] < b[data]) return -1;
                      if (a[data] > b[data]) return 1;
                      return 0;
                    });
                  }
                  const updatedAgeFourthCriterioa = sortedData.filter((item) =>
                item.name.toLowerCase().includes(data.toLowerCase())
              );
                //const updatedAgeFourthCriterioa = ageFourthCriterioa.filter(item => item.name.includes(data));
                console.log(updatedAgeFourthCriterioa)
                setAgeFourthCriterioa(updatedAgeFourthCriterioa)
            } 
        }
      
       
    }




    return (
        <div>
            <div>
                <Button onClick={handleAddUser}>Add User</Button>
                <Button onClick={handleEditUser}>Edit</Button>
                <Button onClick={handleDeleteUser}>Delete</Button>
                
            </div>
           
            <Table striped bordered hover size="sm">
                
                <div style={{ "display": "flex" ,"border":"1px solid black","borderLeft":"1px solid black"}}>

                    <Table style={{ "width": "250px" }}>
                    <Form.Label htmlFor="inputPassword5">search user</Form.Label>
            <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onChange={(e)=>searchitst(e,"18")}
            />
                        <thead>Age 1-18</thead>
                        <tbody>
                            {ageFirstCriterioa?.map((item) =>
                                <>
                                    <td style={{ "width": "250px" }}>
                                        <tr style={{ "border": "2px" }}>
                                            <td>
                                                <Form.Check // prettier-ignore
                                                    checked={userList?.age == item.age}
                                                    onChange={(event) => handleCheck(event, item)}
                                                    id={item.index}
                                                />
                                            </td>
                                            <td>{item?.name}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.age}</td>
                                            <td>{item?.phone}</td>
                                        </tr>
                                    </td>
                                    <br />
                                </>
                            )}

                        </tbody>
                        
                    </Table>
                    <Table style={{ "width": "250px" }}>
                    <Form.Label htmlFor="inputPassword5">search user</Form.Label>
            <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onChange={(e)=>searchitst(e,"25")}
            />
                        <thead>Age 19-25</thead>
                        <tbody>
                            {ageSecondCriterioa?.map((item, index) =>
                                <>
                                    <td style={{ "width": "250px" }}>
                                        <tr style={{ "border": "2px" }}>
                                            <td>
                                                <Form.Check // prettier-ignore
                                                    checked={userList?.age == item?.age}
                                                    onChange={(event) => handleCheck(event, item)}
                                                    id={item.index}
                                                />
                                            </td>
                                            <td>{item?.name}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.age}</td>
                                            <td>{item?.phone}</td>
                                        </tr>
                                    </td>
                                    <br />
                                </>
                            )}

                        </tbody>
                    </Table>
                    <Table style={{ "width": "250px" }}>
                    <Form.Label htmlFor="inputPassword5">search user</Form.Label>
            <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onChange={(e)=>searchitst(e,"45")}
            />
                        <thead>Age 26-45</thead>
                        <tbody>
                            {ageThirdCriterioa?.map((item, index) =>
                                <>
                                    <td style={{ "width": "250px" }}>
                                        <tr style={{ "border": "2px" }}>
                                            <td>
                                                <Form.Check // prettier-ignore
                                                    checked={userList?.age == item.age}
                                                    onChange={(event) => handleCheck(event, item)}
                                                    id={item.index}
                                                />
                                            </td>
                                            <td>{item?.name}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.age}</td>
                                            <td>{item?.phone}</td>
                                        </tr>
                                    </td>
                                    <br />
                                </>
                            )}

                        </tbody>
                    </Table>
                    <Table style={{ "width": "250px" }}>
                    <Form.Label htmlFor="inputPassword5">search user</Form.Label>
            <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                onChange={(e)=>searchitst(e,"46")}
            />
                        <thead>Age 45 +</thead>
                        <tbody>
                            {ageFourthCriterioa?.map((item, index) =>
                                <>
                                    <td style={{ "width": "250px" }}>
                                        <tr style={{ "border": "2px" }}>
                                            <td>
                                                <Form.Check // prettier-ignore
                                                    checked={userList?.age == item.age}
                                                    onChange={(event) => handleCheck(event, item)}
                                                    id={item.index}
                                                />
                                            </td>
                                            <td>{item?.name}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.age}</td>
                                            <td>{item?.phone}</td>
                                        </tr>
                                    </td>
                                    <br />
                                </>
                            )}

                        </tbody>
                    </Table>
                </div>
                {/* <thead>
                    <tr>
                        <th>Age 1-18
                            <tr>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Age</th>
                            </tr>
                        </th>
                        <th>Age 19-25
                            <tr>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Age</th>
                            </tr>
                        </th>
                        <th>Age 25-45
                            <tr>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Age</th>
                            </tr>
                        </th>
                        <th>Age 45 +
                            <tr>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Age</th>
                            </tr>
                        </th>

                    </tr>
                </thead> */}

            </Table>
            <div style={{ "marginTop": "200px" }}>

                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header >
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddUesr getUserList={getSavedData} getEditData={userList} isEdit={isEdit} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    )
}

export default Grid