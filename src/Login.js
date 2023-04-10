import { Container } from "react-bootstrap";

function Login()
{
    return (
        <div>
            <form action="" method="">
                <container class="container">
                    <h3>Sign IN</h3>

                    <label name="uname" id="uname">User Name :</label>&nbsp;
                    <input name="uname" id="uname" type="text" /><br />
                    <br />
                    <label name="email" id="email">Email ID :</label>&nbsp;
                    <input name="email" id="email" type="email" /><br />
                    <br />
                    <label name="mobile" id="mobile">Mobile NO :</label>&nbsp;
                    <input name="mobile" id="mobile" type="number" />
                </container>


            </form>
        </div>
    )
}

export default Login;