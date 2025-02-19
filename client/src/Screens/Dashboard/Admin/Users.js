import React, { useEffect } from "react";
import Table2 from "../../../Components/Table2";
import SideBar from "../SideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  getAllUsersAction,
} from "../../../Redux/Actions/userActions";
import toast from "react-hot-toast";
import Loader from "../../../Components/Notfications/Loader";
import { Empty } from "../../../Components/Notfications/Empty";

function Users() {
  const dispatch = useDispatch();

  const { isLoading, isError, users } = useSelector(
    (state) => state.adminGetAllUsers
  );
  // delete
  const { isError: deleteError, isSuccess } = useSelector(
    (state) => state.adminDeleteUser
  );

  // delete user handler
  const deleteMoviesHandler = (id) => {
    if (window.confirm("Tem certeza de que deseja excluir este usuário?")) {
      dispatch(deleteUserAction(id));
    }
  };

  // useEffect
  useEffect(() => {
    dispatch(getAllUsersAction());
    if (isError || deleteError) {
      toast.error(isError || deleteError);
      dispatch({
        type: isError ? "GET_ALL_USERS_RESET" : "DELETE_USER_RESET",
      });
    }
  }, [dispatch, isError, deleteError, isSuccess]);

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Utilizadores</h2>
        {isLoading ? (
          <Loader />
        ) : users?.length > 0 ? (
          <Table2
            data={users}
            users={true}
            onDeleteFunction={deleteMoviesHandler}
          />
        ) : (
          <Empty message="Você não tem nenhum usuário" />
        )}
      </div>
    </SideBar>
  );
}

export default Users;
