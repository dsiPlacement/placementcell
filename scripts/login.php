<!DOCTYPE html>
<?php
    session_start();
?>
<html lang='en'>
    <head>
        <title>Student Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="../css/defined.css">
        <link rel="stylesheet" type="text/css" href="../css/bootstrap-theme.css">
        <script src="js/jquery.min.js"> </script>
        <script src="js/jquery-ui.min.js"> </script>
	<script src="js/jquery-ui.js"> </script>
	<script src="js/bootstrap.min.js"> </script>
    </head>
    <body>
        <?php 
            include 'validate.php';    
            include 'dbconnector.php';
            
            $usn = $_SESSION["usn"];
          
            if($_SERVER["REQUEST_METHOD"]=="POST"){
                //$usn = test_input($_POST["usn"]);
                $password = test_input($_POST['password']);
                $statement = "SELECT password FROM login WHERE userId='$usn'";
                $conn = initConnection("student");
                $result = mysqli_query($conn,$statement);
                $data = mysqli_fetch_object($result);
                $loginTime = time();
                if($data->password == $password) {
                    echo "Everything looks good"; //redirect to student dashboard 
                }
                else {
                    echo "Wrong Password";
                }
            }             
        ?>
        
        <div class="login-parallax">
            <div class="container-fluid header">
      <nav class="navbar navbar-fixed-top">
          <ul class="topnav nav nav-pills">
            <li><b style="font-size:30px;color:#ffffff;">Placementcell</b></li>
            <li class="right"><a class="active" href="../index.php">Home</a></li>
              <li class="right"><a href="#collegeBlog">College Blog</a></li>
              <li class="right"><a href="#contact">Contact Us</a></li>
              <li class="right"><a href="#about">About Us</a></li>
              <li class="right"><a href="#about">Partners</a></li>
          </ul>
      </nav>
    </div> 
  <!--Navigation bar ends-->
        <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <div class="login">
                <div class="form-group">
                    <label for="password">Entered USN is  : <?php echo $usn; ?></label>
                </div>
                <div class="form-group">
                    <input type="text" name="password" id="password" onclick="(this.type='password')" class="input-lg form-control" placeholder="Enter Your password here" required>
                </div>
                <div class="form-group" align="center">
                    <button type="submit" class="btn btn-outline btn-custom1 btn-lg">Login</button>
                </div>
            </div>
        </form>
        </div>
        <?php include 'footer.php'; ?>
    </body>
</html>