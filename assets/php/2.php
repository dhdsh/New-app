<?php 
header("Access-Control-Allow-Origin: *");
$arr = [
	["id"=>1,"img"=>"assets/images/520.jpg","he"=>"降噪耳机Type-C版","wr"=>"随时随地，安静聆听好声音","price"=>299,"yu"=>"元"],
	["id"=>1,"img"=>"assets/images/521.jpg","he"=>"降噪耳机Type-C版","wr"=>"随时随地，安静聆听好声音","price"=>299,"yu"=>"元"],
	["id"=>1,"img"=>"assets/images/522.jpg","he"=>"降噪耳机Type-C版","wr"=>"随时随地，安静聆听好声音","price"=>299,"yu"=>"元"],
	["id"=>1,"img"=>"assets/images/523.jpg","he"=>"降噪耳机Type-C版","wr"=>"随时随地，安静聆听好声音","price"=>299,"yu"=>"元"]
];

echo json_encode($arr);