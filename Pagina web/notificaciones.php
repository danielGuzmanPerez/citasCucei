<?php
$message = $_GET ["M"]; // El mensaje que vayas a enviar
$title = $_GET["T"]; // Título de la notificación
$path_to_fcm = 'https://fcm.googleapis.com/fcm/send';
$server_key='AAAAO7I66Cc:APA91bH3b_4xpiFx1bGHnxC6j_ID0BMGqxs7xcHQC2vhuN3IAMQurYZmOlE8qN6_pym387_RDnOZm6cS9cogykNA68rauK2ic9KZT8Btp6gTFIQkDV6vxbvidZ1K_u-sgHAtXxQE10Si';
//$sql = “Tu query donde buscas el Token del usuario que te interesa”;
//$result = mysqli_query($con, $sql); // Conexión con la Base de Datos
//$row = mysqli_fetch_row($result);
$keyToken = "topic_general"; // Obtención del Token
$headers = array(
'Authorization:key=' .$server_key,
'Content-Type:application/json',
'Content-Length: 0'
);
// Para un solo token, si es para varios usar “registration_ids” en vez de “to”.
$fields = array('registration_ids'=>$keyToken, 'notification'=>array('title'=>$title, 'body'=>$message));
$payload = json_encode($fields);
// Abrir la sesión
$curl_session = curl_init();
// Definir la URL a la que se le hará el post
curl_setopt($curl_session, CURLOPT_URL, $path_to_fcm);
// Indicar el tipo de petición: POST
curl_setopt($curl_session, CURLOPT_POST, TRUE);
curl_setopt($curl_session, CURLOPT_HTTPHEADER, $headers);
// Recibimos una respuesta y la guardamos en una variable
curl_setopt($curl_session, CURLOPT_RETURNTRANSFER, true);
$remote_server_output = curl_exec($curl_session);
curl_setopt($curl_session, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl_session, CURLOPT_IPRESOLVE, );
// Definir cada uno de los parámetros
curl_setopt($curl_session, CURLOPT_POSTFIELDS, $payload);
//$result = curl_exeec($curl_session);
//mysqli_close($con);
// Cerrar la sesion
curl_close($curl_session);
// Mostrar el resultado
print_r($remote_server_output);
?>