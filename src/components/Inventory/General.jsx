import react, { useState }  from "react";
import styles from './General.module.css';

const General=()=>{
  const [vehicle, setVehicle] = useState('');
    return(
<div>
        <div className={styles.formcontainer}>
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                <div className={styles.selectWrapper}>
                    <select className={styles.inputFields} value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
                      <option value="" disabled>
                        Select Garage
                      </option>
                      <option value="Khushi Mombasa">
                        Khushi Motors Mombasa
                      </option>
                      <option value="Khushi Express">
                        Khushi Motors Express
                      </option>
                      <option value="Khushi Tanzania">
                        Khushi Motors Tanzania
                      </option>
                      <option value="Khushi Uganda">
                        Khushi Motors Uganda
                      </option>
                    </select>
                    </div>
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Attribute Type*"
                    className={styles.inputField}
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
                  />
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Select Make*"
                    className={styles.inputField}
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
                  />
                  </div>
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Select YOM*"
                    className={styles.inputField}
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
                  />
                  </div>
                </div>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Mileage*"
                    className={styles.inputField}
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
                    />
                    <button className={styles.decodeButton}>Decode</button>
                  </div>
                </div>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Engine*"
                    className={styles.inputField}
                  />
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Interior Color"
                    className={styles.inputField}
                  />
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Body Type*"
                    className={styles.inputField}
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
                  />
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Fuel Type*"
                    className={styles.inputField}
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
                  />
                  </div>
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Drive Type*"
                    className={styles.inputField}
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
                  />
                </div>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Seats*"
                    className={styles.inputField}
                  />
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Model Code*"
                    className={styles.inputField}
                  />
                </div>
                <div className={styles.inputColumn}>
                  <div className={styles.selectWrapper}>
                  <input
                    type="text"
                    placeholder="Auction Grade*"
                    className={styles.inputField}
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
                  />
                </div>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Dimension M3*"
                    className={styles.inputField}
                  />
                </div>
              </div>
        
              <div className={styles.inputRow}>
                <div className={styles.inputColumn}>
                  <input
                    type="text"
                    placeholder="Steering"
                    className={styles.inputFieldSteering}
                  />
                </div>
              </div>
              <div className={styles.textareaInput}></div>
            </div>
      </div>
    )
}

export default General;