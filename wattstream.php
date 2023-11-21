<?php include_once 'parts/header.php';?>
<?php
global $offer;
$offer = "ПОСТАВКА ДИЗЕЛЬНЫХ ГЕНЕРАТОРОВ <span>WattStream</span> ПО ВСЕЙ РОССИИ ПОД КЛЮЧ <span>ОТ 1 ДНЯ СО СКИДКОЙ ДО 50% И ОТСРОЧКОЙ ПЛАТЕЖА</span>"
?>
<main id="mainblock">
    <?php include_once 'parts/main.php';?>

    <section id="open_quiz">
        <div class="wrap">
            <div class="bh1"> Получите все варианты дизельных генераторов с ценами для Ваших задачи и подарок:</div>
            <div class="qwiz-inner qwiz-open-inner ">
                <form class="qwiztest" id="form_quiz_1">
                    <!-- Hidden Required Fields -->
                    <input name="form_subject" value="КВИЗ WattStream" type="hidden">
                    <!-- END Hidden Required Fields -->
                    <?php include 'parts/quiz.php'; ?>

                </form>
            </div>
        </div>
    </section>
</main>
<?php include_once 'parts/footer.php'; ?>
<div class="popups">
    <?php include_once 'parts/popup.php'; ?>

    <div style="display: none;" id="popup_qwiz" class="qwiz-modal" data-selectable="true">
        <div class="qwiz-inner qwiz-modal-inner">
            <form enctype="multipart/form-data" class="qwiztest" id="form_quiz_2">
                <!-- Hidden Required Fields -->
                <input name="form_subject" value="КВИЗ WattStream" type="hidden">
                <!-- END Hidden Required Fields -->
                <?php include 'parts/quiz.php'; ?>


            </form>
        </div>
    </div>
    <!--popup-->
    <!--popup exit-->
</div>
<?php include_once 'parts/scripts.php'; ?>
</body>
</html>