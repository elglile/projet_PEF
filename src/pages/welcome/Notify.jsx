import { useState, createContext, useContext } from "react"
import { BiErrorAlt, BiErrorCircle, BiSolidError } from "react-icons/bi";
import { FaCircleInfo } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";

function Alerts() {



  // AlertConferm
  const [showAlert, setShowAlert] = useState('');

  const handleShowAlert = (type) => {
    setShowAlert(type);
  };

  const handleCloseAlert = () => {
    setShowAlert('');
  };

  // AlertManager
  const [managerAlerts, setManagerAlerts] = useState([]);

  const showAlertManager = (type) => {
    const newAlertManager = {
      id: Date.now(),
      type: type,
      message: getMessageByType(type),
    };
    setManagerAlerts([...managerAlerts, newAlertManager]);

    setTimeout(() => {
      removeAlert(newAlertManager.id);
    }, 2000);
  };
  const getMessageByType = (type) => {
    switch (type) {
      case 'info':
        return 'This is an info alert';
      case 'success':
        return 'This is a success alert';
      case 'danger':
        return 'This is a danger alert';
      case 'warning':
        return 'This is a warning alert';
      default:
        return '';
    }
  };
  const removeAlert = (id) => {
    setManagerAlerts(managerAlerts.filter(alert => alert.id !== id));
  };



  return (
    <>
      <Notify />
      {/* <AlertManager /> */}
      {/* <Conferminfo/> */}
      <AlertSystem />


      {/* AlertConferm */}
      <div>
        <button className="btn btn-info me-2" onClick={() => handleShowAlert('info')} disabled={showAlert === 'info'}>
          Show Info
        </button>
        <button className="btn btn-success me-2" onClick={() => handleShowAlert('success')} disabled={showAlert === 'success'}>
          Show Success
        </button>
        <button className="btn btn-danger me-2" onClick={() => handleShowAlert('danger')} disabled={showAlert === 'danger'}>
          Show Error
        </button>
        <button className="btn btn-warning me-2" onClick={() => handleShowAlert('warning')} disabled={showAlert === 'warning'}>
          Show Warning
        </button>
        {showAlert && <AlertConferm type={showAlert} onClose={handleCloseAlert} />}
      </div>

      <div>
        <AlertManager />

        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
          {managerAlerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.type} d-flex justify-content-between align-items-center mb-2`} role="alert">
              <div className="d-flex align-items-center">
                {alert.type === 'info' && <FaCircleInfo size={16} />}
                {(alert.type === 'success' || alert.type === 'error' || alert.type === 'warning') && <FaRegCheckCircle size={16} />}
                <p className="mb-0">
                  {alert.message}
                </p>
              </div>
              <button type="button" className="close" onClick={() => removeAlert(alert.id)} aria-label="Close">×</button>
            </div>
          ))}
          <div className="d-flex">
            <button className="btn btn-info me-2" onClick={() => showAlertManager('info')}>Show Info</button>
            <button className="btn btn-success me-2" onClick={() => showAlertManager('success')}>Show Success</button>
            <button className="btn btn-danger me-2" onClick={() => showAlertManager('danger')}>Show Error</button>
            <button className="btn btn-warning me-2" onClick={() => showAlertManager('warning')}>Show Warning</button>
          </div>
        </div>
      </div>
    </>)

}


function Notify(props) {
  const [Show, setShow] = useState(true);
  const [clas, setclas] = useState('alert alert-success alert-dismissible fade show');
  return (
    <>
      {Show && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span onClick={() => setShow(false)}>×</span>
        </button>
      </div>}
    </>
  );
}






function IIInfo() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="text-dark alert alert-info border border-info">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="flex-grow-1 d-flex">
                <div className="me-3 pt-1">
                  <FaCircleInfo size={26} />
                </div>
                <div>
                  <h4 className="h4">info - make it short & clear.</h4>
                  <p className="text-muted">Description - make it as clear as possible.</p>
                  <div className="d-flex">
                    <button type="button" className="btn btn-info">
                      info button
                    </button>
                    <button className="btn btn-outline-info mt-2">Understood</button>
                  </div>
                </div>
              </div>
              <div>
                <button data-bs-dismiss="alert" type="button" className="close" data-dismiss="alert" aria-label="Close">×</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// 
function Conferminfo(params) {
  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
      <div className="alert alert-info d-flex justify-content-between align-items-center mb-0" role="alert">
        <div className="d-flex align-items-center">
          <FaCircleInfo size={16} />
          <p className="mb-0">
            <strong>Info:</strong> This is an info alert
          </p>
        </div>
        <button data-bs-dismiss="alert" type="button" className="close" data-dismiss="alert" aria-label="Close">×</button>
      </div>
    </div>
  );
}





function AlertConferm({ type, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className="position-fixed top-50 start-50 translate-middle" style={{ zIndex: 1050, width: '600px', display: isVisible ? 'block' : 'none' }}>
      <div className={`text-dark alert alert-${type} border border-${type}`}>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="flex-grow-1 d-flex">
            <div className="me-3 pt-1">
              {type === 'info' && <FaCircleInfo size={26} />}
              {(type === 'success' || type === 'danger' || type === 'warning') && <FaRegCheckCircle size={26} />}
            </div>
            <div>
              <h4 className="h4">{type.charAt(0).toUpperCase() + type.slice(1)} - make it short & clear.</h4>
              <p className="text-muted">Description - make it as clear as possible.</p>
              <div className="d-flex">
                <button type="button" className={`btn btn-${type}`}>
                  {type} button
                </button>
                <button className={`btn btn-outline-${type} mt-2`} onClick={onClose}>Understood</button>
              </div>
            </div>
          </div>
          <div>
            <button
              data-bs-dismiss="alert"
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={handleDismiss}
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function AlertSystem() {
  const [alerts, setAlerts] = useState([]);

  const showAlert = (type) => {
    const newAlert = {
      id: Date.now(),
      type: type,
      message: getMessageByType(type),
    };
    setAlerts([...alerts, newAlert]);

    setTimeout(() => {
      removeAlert(newAlert.id);
    }, 1000);
  };

  const getMessageByType = (type) => {
    switch (type) {
      case 'info':
        return 'This is an info alert';
      case 'success':
        return 'This is a success alert';
      case 'danger':
        return 'This is a danger alert';
      case 'warning':
        return 'This is a warning alert';
      default:
        return '';
    }
  };

  const removeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div>
      <div className="d-flex mb-3">
        <button className="btn btn-info me-2" onClick={() => showAlert('info')}>Show Info</button>
        <button className="btn btn-success me-2" onClick={() => showAlert('success')}>Show Success</button>
        <button className="btn btn-danger me-2" onClick={() => showAlert('danger')}>Show Error</button>
        <button className="btn btn-warning me-2" onClick={() => showAlert('warning')}>Show Warning</button>
      </div>
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
        {alerts.map(alert => (
          <div key={alert.id} className={`alert alert-${alert.type} d-flex justify-content-between align-items-center mb-2`} role="alert">
            <div className="d-flex align-items-center">
              {alert.type === 'info' && <FaCircleInfo size={16} />}
              {alert.type === 'success' && <FaCircleInfo size={16} />}
              {alert.type === 'danger' && <FaRegCheckCircle size={16} />}
              {alert.type === 'warning' && <FaRegCheckCircle size={16} />}
              <p className="mb-0">
                {alert.message}
              </p>
            </div>
            <button type="button" className="close" onClick={() => removeAlert(alert.id)} aria-label="Close">×</button>
          </div>
        ))}
      </div>
    </div>
  );
}
// function AlertManager() {
//   const [manageralerts, setManagerAlerts] = useState([]);

//   const showAlertManager = (type) => {
//     const newAlertManager = {
//       id: Date.now(),
//       type: type,
//       message: getMessageByType(type),
//     };
//     setManagerAlerts([...manageralerts, newAlertManager]);

//     setTimeout(() => {
//       removeAlert(newAlertManager.id);
//     }, 2000);
//   };

//   const getMessageByType = (type) => {
//     switch (type) {
//       case 'info':
//         return 'This is an info alert';
//       case 'success':
//         return 'This is a success alert';
//       case 'danger':
//         return 'This is a danger alert';
//       case 'warning':
//         return 'This is a warning alert';
//       default:
//         return '';
//     }
//   };

//   const removeAlert = (id) => {
//     setManagerAlerts(manageralerts.filter(alert => alert.id !== id));
//   };

//   return (
//     <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
//       {manageralerts.map(alert => (
//         <div key={alert.id} className={`alert alert-${alert.type} d-flex justify-content-between align-items-center mb-2`} role="alert">
//           <div className="d-flex align-items-center">
//             {alert.type === 'info' && <FaCircleInfo size={16} />}
//             {alert.type === 'success' && <FaCircleInfo size={16} />}
//             {alert.type === 'danger' && <FaRegCheckCircle size={16} />}
//             {alert.type === 'warning' && <FaRegCheckCircle size={16} />}
//             <p className="mb-0">
//               {alert.message}
//             </p>
//           </div>
//           <button type="button" className="close" onClick={() => removeAlert(alert.id)} aria-label="Close">×</button>
//         </div>
//       ))}
//       <div className="d-flex">
//         <button className="btn btn-info me-2" onClick={() => showAlertManager('info')}>Show Info</button>
//         <button className="btn btn-success me-2" onClick={() => showAlertManager('success')}>Show Success</button>
//         <button className="btn btn-danger me-2" onClick={() => showAlertManager('danger')}>Show Error</button>
//         <button className="btn btn-warning me-2" onClick={() => showAlertManager('warning')}>Show Warning</button>
//       </div>
//     </div>
//   );
// }

function AlertManager({ onShowAlert }) {
  const [managerAlerts, setManagerAlerts] = useState([]);

  const showAlertManager = (type) => {
    const newAlertManager = {
      id: Date.now(),
      type: type,
      message: getMessageByType(type),
    };
    setManagerAlerts([...managerAlerts, newAlertManager]);

    setTimeout(() => {
      removeAlert(newAlertManager.id);
    }, 2000);
  };

  const getMessageByType = (type) => {
    switch (type) {
      case 'info':
        return 'This is an info alert';
      case 'success':
        return 'This is a success alert';
      case 'danger':
        return 'This is a danger alert';
      case 'warning':
        return 'This is a warning alert';
      default:
        return '';
    }
  };

  const removeAlert = (id) => {
    setManagerAlerts(managerAlerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
      {managerAlerts.map(alert => (
        <div key={alert.id} className={`alert alert-${alert.type} d-flex justify-content-between align-items-center mb-2`} role="alert">
          <div className="d-flex align-items-center">
            {alert.type === 'info' && <FaCircleInfo size={16} />}
            {(alert.type === 'success' || alert.type === 'error' || alert.type === 'warning') && <FaRegCheckCircle size={16} />}
            <p className="mb-0">
              {alert.message}
            </p>
          </div>
          <button type="button" className="close" onClick={() => removeAlert(alert.id)} aria-label="Close">×</button>
        </div>
      ))}
      {/* No buttons here */}
    </div>
  );
}

export default Alerts;