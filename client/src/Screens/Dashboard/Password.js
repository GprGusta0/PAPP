import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { InlineError } from "../../Components/Notfications/Error";
import { Input } from "../../Components/UsedInputs";
import { PasswordValidation } from "../../Components/Validation/UserValidation";
import { changePasswordAction } from "../../Redux/Actions/userActions";
import SideBar from "./SideBar";

function Password() {
  const dispatch = useDispatch();
  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.userchangepassword
  );

  // validate user
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PasswordValidation),
  });

  // on submit
  const onSubmit = (data) => {
    dispatch(changePasswordAction(data));
  };

  // useEffect
  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
    }
    if (message) {
      toast.success(message);
      reset();
    }
  }, [isSuccess, isError, message, reset, dispatch]);

  return (
    <SideBar>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Alterar a senha</h2>
        <div className="w-full">
          <Input
            label="Senha anterior"
            placeholder="********"
            type="password"
            bg={true}
            name="oldPassword"
            register={register("oldPassword")}
          />
          {errors.oldPassword && (
            <InlineError text={errors.oldPassword.message} />
          )}
        </div>
        <div className="w-full">
          <Input
            label="Nova Senha"
            placeholder="********"
            type="password"
            bg={true}
            name="newPassword"
            register={register("newPassword")}
          />
          {errors.newPassword && (
            <InlineError text={errors.newPassword.message} />
          )}
        </div>
        <div className="w-full">
          <Input
            label="Confirmar Senha"
            placeholder="********"
            type="password"
            bg={true}
            name="confirmPassword"
            register={register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <InlineError text={errors.confirmPassword.message} />
          )}
        </div>

        <div className="flex justify-end items-center my-4">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto"
          >
            {isLoading ? "A Mudar..." : "Mudou a Senha"}
          </button>
        </div>
      </form>
    </SideBar>
  );
}

export default Password;
