<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'wp1' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OYB3#P+(45;px~T8qzz-Uvcj}T)mub)SWNglbO6ho6fLV,? HJ|+KCgU0H57SG?y' );
define( 'SECURE_AUTH_KEY',  'Bcx<|2o,b=*e~!1BzOY.{P`9P&*#j+J{Gfed9Q`GKvxJ.-ba8/nbQK&`[k.-,ro?' );
define( 'LOGGED_IN_KEY',    'BqG@tm=.0NBWF2lLS` KSCu?($-X@h%r=P^(3vO>J{n3OCE?Nm@R%KjqWYMtNW 3' );
define( 'NONCE_KEY',        'WZ]&%x*m+&trL1rj3V8Sd;hZ]!d7Oez;k;Cz#?g>Gb_[:Sfm7;6>3?dk |kGBct0' );
define( 'AUTH_SALT',        'Wv[(XOuF7I~Ri?}I2hG=4NMfQl1Gu:6lA<16`2PFO#kOP3}FLL_T+H wfuen[.~W' );
define( 'SECURE_AUTH_SALT', '3~jvQc-Xv_({b35[EK1U)cgMVpej9)b~VI3.ushs<vX)HzI_83&N^kVS#623-:nF' );
define( 'LOGGED_IN_SALT',   'Ej<5x,o==S1!_bsdbK|ta)E6C#F67}sI-4LKa=|n94fiLADnG,nZ%@j<@I#Ra6yF' );
define( 'NONCE_SALT',       '1?@>.t;LAjY|7D<GTU{{2$aw+wE|X3KC=j Ct)H79,w~j{Ql~$/jq$[us2~CyN@D' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
