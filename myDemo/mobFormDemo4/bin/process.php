<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-22 00:03:14
 * @version $Id$
 */
	header("Content-Type:text/xml; charset=utf-8");

		$username = $_POST['username'];
    	echo "注册成功,密码已发到你的邮箱,请查收.".$username;
?>
