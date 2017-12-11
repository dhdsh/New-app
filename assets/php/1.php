<?php 
header("Access-Control-Allow-Origin: *");
$arr = [
	["name"=>"小米6","number"=>"约有6件"],
	["name"=>"红米note4X","number"=>"约有8件"],
	["name"=>"小米MIX","number"=>"约有1件"],
	["name"=>"小米MIX","number"=>"约有3件"],
	["name"=>"小米手机5","number"=>"约有6件"],
	["name"=>"手环","number"=>"约有4件"],
	["name"=>"充电宝","number"=>"约有10件"],
	["name"=>"耳机","number"=>"约有4件"],
	["name"=>"耳机","number"=>"约有4件"]	
];

echo json_encode($arr);