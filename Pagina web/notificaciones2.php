
    <?php
    $Dia=$_GET["Dia"];
    $Mes=$_GET["Mes"];
    $Hora=$_GET["Hora"];
    $notification = array();
    $notification['title'] = 'Título de la notificación';
    $notification['message'] = "Tu cita del dia '$Dia' de '$Mes' a las '$Hora' fue eliminada";
    $notification['image'] = '';
    $notification['action'] = '';
    $notification['action_destination'] = '';            

    $topic = "topic_general";

    $fields = array(
        'to' => '/topics/' . $topic,
        'data' => $notification,
    );

    // Set POST variables
    $url = 'https://fcm.googleapis.com/fcm/send';

    $headers = array(
                'Authorization: key=AAAAO7I66Cc:APA91bH3b_4xpiFx1bGHnxC6j_ID0BMGqxs7xcHQC2vhuN3IAMQurYZmOlE8qN6_pym387_RDnOZm6cS9cogykNA68rauK2ic9KZT8Btp6gTFIQkDV6vxbvidZ1K_u-sgHAtXxQE10Si',
                'Content-Type: application/json'
                );
                
    // Open connection
    $ch = curl_init();

    // Set the url, number of POST vars, POST data
    curl_setopt($ch, CURLOPT_URL, $url);

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Disabling SSL Certificate support temporarily
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));       
    
    $result = curl_exec($ch);

    if($result === FALSE) {

        die('Curl failed: ' . curl_error($ch));
    }

    // Close connection
    curl_close($ch);
    ?>
