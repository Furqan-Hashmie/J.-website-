import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Context/TokenAuth";

export function Newlogin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const navigate = useNavigate();
  const [ auth , setAuth ] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ error , setError ] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
      email,
      password,
    });
    console.log(res);
    setAuth({
      user:res.data.user,
      token:res.data.token
    })
    localStorage.setItem("auth" , JSON.stringify(res.data));
    navigate("/")
    } catch (error) {
      setError(error.response.data.message)
    }
  };

  return (
    <>
      <Typography onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </Typography>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <form onSubmit={onSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Login
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your email and password to LogIn.
              </Typography>
              <div className="text-red-800 bg-red-50 rounded-lg text-center">
                {error}
              </div>
              <Typography className="-mb-2" variant="h6">
                Your Email
              </Typography>
              <Input
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                size="lg"
              />
              <Typography className="-mb-2" variant="h6">
                Your Password
              </Typography>
              <Input
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                size="lg"
              />
              <div className="-ml-2.5 -mt-3">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                LogIn
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={handleOpen}
                >
                  <Link to="/register">Register</Link>
                </Typography>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
</>
);
}