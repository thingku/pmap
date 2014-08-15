<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">		
	<title>PMAP</title>
	<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.custom.min.js"></script>
	<script type="text/javascript" src="js/modernizr.custom.js"></script>
	<link rel="stylesheet" href="js/font-awesome/css/font-awesome.min.css"/>
	<script type="text/javascript" src="js/library.js"></script>
	<link rel="stylesheet" media="all" href="css/common.css"/>
	<link rel="stylesheet" media="all" href="css/main.css"/>
</head>
<body>
	
	<div class="mainContainer">

		<?php include 'header.php'; ?>

		<?php include 'sidebar.php'; ?>

		<?php include 'content.php'; ?>

	</div>

</body>

<script type="text/javascript">

	$(document).ready(function() {

		$.fn.sideBar();

		$.fn.mainContent();

		$.fn.tabContents();

	});

</script>

</html>