import { useDispatch, useSelector } from "react-redux"
import { onCLoseDateModal, onOpenDateModal } from "../store/ui/uiSlice";


export const useUiStore = ()=>{

  const dispatch = useDispatch()

  const {
    isDateModalOpen
  } = useSelector(state=>state.ui);

  const openDateModal = ()=>{
    dispatch( onOpenDateModal())
  };
  
  const closeDateModal = ()=>{
    dispatch( onCLoseDateModal())
  };

  

  return{
    isDateModalOpen,
    openDateModal,
    closeDateModal
  }
}