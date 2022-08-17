import './AttrItem.css'
import {Lib} from "../../../Material/PrototypeLib";
export default function AttrItem(props){

    return(
      <div className={'attr-item'}>
          <div className={'attr-info'}>
              <span className={'attr-title'}>{props.attrName+':'}</span>
              <input
                  className={'attr-input'} type={'text'}
                  value={props.value}
                  onChange={(event)=>props.value=event.target.value}
                  onBlur={(event)=>{
                      if(event.target.value==='undefined'){
                          props.manager.removeInstanceAttr(props.instance,props.attrName)
                      }else{
                          props.manager.modifyInstanceAttr(
                              props.instance,
                              props.attrName,
                              event.target.value
                          );
                          console.log(Lib.div.defaultChildren)
                      }
                  }}
              />
          </div>
          <div className={'remove-attr'} onClick={(event)=>{
              props.manager.removeInstanceAttr(props.instance,props.attrName)
          }}>-</div>
      </div>
    );
}

AttrItem.defaultProps = {
    instance:null,
    attrName:'key',
    value:'value',
    manager: null
}
