<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hellopage' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'g14mvxz03;Hg!:G#:Xlf[3A?}JWuB~..;K)h|+l1q(xhq7JO)[H41&L=Y/)su(sr' );
define( 'SECURE_AUTH_KEY',  '{f70<W>Ivhb_zXuB]Uf#aI&,E/u/@{B,:zTBnN:WgB$%^NnUmaB{C&G:v-Zzr#Vm' );
define( 'LOGGED_IN_KEY',    '^2NSGuCyYJSMVVY.h$3A;bP]JKS2;1 nhpe`M5Z.<c`Ou1Y0->Uk)8c*B)4[kjAF' );
define( 'NONCE_KEY',        'B3/.i/Et.NT06|/Bs]$zEJy^EDT,[xf_KEeH2Tu{.0ux8p/v;FB`@BF!98iM)b@{' );
define( 'AUTH_SALT',        'l3**7;@QyDUEK5DO+|<~JKnR*9h2~r~VZv}W%Z2(OK-KW=X1GGb%9zAhRN3l@NU@' );
define( 'SECURE_AUTH_SALT', 'g ,.Il Fmrn]:xrpvEluc%Qf<sHHX|GdNs%Fea_O^-Zvy)Br{T/%.!?$$:-V1IkC' );
define( 'LOGGED_IN_SALT',   '>TUK`e+fD3]oZvzQ:fK^>y%2qg  gW{VPSjx+/?F(ZO<`G/m%?d;ge&r:sSBs2ik' );
define( 'NONCE_SALT',       ':_BMuOb*h.2U3[,mXBOAZQYZ9+%Lc {c[+UK,Jl!^9l<$|23R|qxBknc[|Gt.Ug$' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
