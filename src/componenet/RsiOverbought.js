import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import { allData } from "../redux/actions/dataActions";

const RsiOverbought = () => {
  const dataList = useSelector((state) => state.allDataList);
  const { data } = dataList
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(allData());
  }, [dispatch]);

  return (
    <>{
      data?.map((v,i) => {
       const  text = v[0]?.criteria
    return (
          <div  key ={i} className='container w-50'>
            <div className='jumbotron'>
              <div className="card mt-5">

                <div className="card-body">

                  <table className="table table-dark table-hover ">

                    <tbody >
                      <tr>
                        <th scope='col' style={{ backgroundColor:"#74b9ff" }}>{v[4].name}
                        <br /> 
                        <p style={{ color: v[4].color, fontSize: "10px" }} to="/top_gainers">{v[4].tag}</p> 
                        </th>
                      </tr>
                      <tr>
                        <th scope='col'>Max of last 5 days close Max of last 120 days close by <Link to="/rsi_params_one">(2)</Link>%
                        
                        
                        <p style={{fontSize:"10px"}}>and</p>
                        
                        
                        Today's Volume prev <Link to="/rsi_params_one">(10)</Link> Vol SMA by <Link to="/rsi_params_three">(1.5)</Link> x
                        <p style={{fontSize:"10px"}}>and</p>
                        
                        
                        RSI <Link to="/rsi_period_params">(14)</Link> greater than 20
                        <br/>
                        <br/>
                        </th>
                      </tr>


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
</>
)

}

export default RsiOverbought