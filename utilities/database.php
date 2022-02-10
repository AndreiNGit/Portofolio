<?php

class Database {
    private $host = "localhost";
    private $db = "tacapaca_todo";
    private $user = "root";
    private $pass = "";
    private $conn;

    function __CONSTRUCT() {
        try{
            $conn = new PDO("mysql:host=$this->host;dbname=$this->db", $this->user, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    public function getConn() {
        return $this->conn;
    }
}

$db = new Database();
$conn = $db->getConn();
echo "test";

?>