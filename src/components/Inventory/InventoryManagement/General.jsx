import react, { useState,useEffect }  from "react";
import styles from './General.module.css';
import axios from "axios";
const General=({data, onChange} )=>{
  const [vehicle, setVehicle] = useState('');
  const [GarageName, setGarageName]= useState([]);
  const [form, setForm]=useState(data||{
    garageName:'',
    attributeType:'',
    stock:'',
    make:'',
    model:'',
    yom:'',
    variant:'',
    mileage:'',
    vinNo:'',
    engine:'',
    interiorColor:'',
    bodyType:'',
    exteriorColor:'',
    fuelType:'',
    transmission:'',
    driveType:'',
    doors:'',
    seats:'',
    modelCode:'',
    auctionGrade:'',
    registrationNo:'',
    dimensionM3:'',
    steering:'',
    groundClearance:'',

  })

  useEffect(()=>{
    onChange(form);

  },[form]);
  /* Fetch Garage Name from DB */
  useEffect(() => {
    axios.get('http://localhost:8081/GarageName')
      .then((res) => {
        console.log("Garage response:", res.data); // ✅ Add this line
        setGarageName(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  
    return(
<div>
        <div className={styles.formcontainer}>
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                <div className={styles.selectWrapper}>
                    <select className={styles.inputFields} value={form.garageName} onChange={(e) => setForm({...form, garageName: parseInt(e.target.value)})}>
                      <option value="" disabled>
                        Select Garage
                      </option>
                      {GarageName.map((garage) => (
                        <option key={garage.id} value={garage.id}>{garage.name}</option>))}
                    </select>
                    </div>
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Attribute Type*"
                    className={styles.inputField}
                    onChange={(e)=> setForm({...form,attributeType:e.target.value})}
                  />
                  </div>
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Enter Stock*"
                    className={styles.inputField}
                    onChange={(e)=> setForm({...form,stock:e.target.value})}
                  />
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Select Make*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form,make:e.target.value})}
                  />
                  </div>
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Select Model*"
                    className={styles.inputField}
                    onChange={(e)=> setForm({...form, model:e.target.value})}
                  />
                  </div>
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Select YOM*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form,yom:e.target.value})}
                  />
                  </div>
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Select Variant*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, variant:e.target.value})}
                  />
                  </div>
                </div>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Mileage*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form,mileage:e.target.value})}
                  />
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <div className={styles.vinInputWrapper}>
                    <input
                      type="text"
                      placeholder="Vin no*"
                      className={styles.inputField}
                      onChange={(e)=>setForm({...form,vinNo:e.target.value})}
                    />
                    <button className={styles.decodeButton}>Decode</button>
                  </div>
                </div>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Engine*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form,engine:e.target.value})}
                  />
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Interior Color"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form,interiorColor:e.target.value})}
                  />
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Body Type*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, bodyType:e.target.value})}
                  />
                  </div>
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Exterior Color"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form,exteriorColor:e.target.value})}
                  />
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Fuel Type*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, fuelType:e.target.value})}
                  />
                  </div>
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Transmission*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form,transmission:e.target.value})}
                  />
                  </div>
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Drive Type*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form,driveType:e.target.value})}
                  />
                  </div>
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Doors*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form,doors:e.target.value})}
                  />
                </div>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Seats*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, seats:e.target.value})}
                  />
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Model Code*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, modelCode:e.target.value})}
                  />
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Auction Grade*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, auctionGrade:e.target.value})}
                  />
                  </div>
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Registraion no*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, registrationNo:e.target.value})}
                  />
                </div>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Dimension M3*"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, dimensionM3:e.target.value})}
                  />
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Steering"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, steering:e.target.value})}
                  />
                </div>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Ground Clearance"
                    className={styles.inputField}
                    onChange={(e)=>setForm({...form, groundClearance:e.target.value})}
                  />
                </div>
              </div>
              <div className={styles.textareaInput}></div>
            </div>
      </div>
    )
}

export default General;