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
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',          'H6r:b<[]1s.$deo@tE[dj&^0j.R{4k)O5m7[M1{Z?D_)$wQ.1Ic#,0/=CL}9NA<Q' );
define( 'SECURE_AUTH_KEY',   '&Q6g1YBCP*Z3~&^/;6]SHk4nL$Hi[ ^CtX8z4]3MDT2#+#yp[FYFIPl0({hRjp~l' );
define( 'LOGGED_IN_KEY',     'sL,HRY;Tnyz4`<UL:#|Tg6~OohDs2X-<_nu+_<it9Nkjsk>:8t{1h>c_#YJz|D7w' );
define( 'NONCE_KEY',         'I4Ak2.v)*U=qou}szMePVp7}VJkER7CP>vU%V!D9tREe5s*@nNFg7OnW0gcXPR-%' );
define( 'AUTH_SALT',         'ZelZwJ 1PO9]l+:7Ag2M]iHYoh]9BmM5B&Jlc6~Roroy3WZd}+Uzt;{:O8638<eM' );
define( 'SECURE_AUTH_SALT',  'tY!;O1_B[*+<-3SevQrDf~fm7lu?Odmt1LueB#5~}%WgBDA,4Ss?_ks}pFRHJZ3l' );
define( 'LOGGED_IN_SALT',    'JQOo3uPrW:gy8uEIbl?yHO=6LzFQ8[tJe/e<]*r5=JYtH1K^@a0(**@4q&KOL2$M' );
define( 'NONCE_SALT',        '>5GC_`}xa>rtk62OK}5>5#d$Uh*r CVvL{TQN^q~|Nnk#%h/mLpn.u-)%]@J:{&H' );
define( 'WP_CACHE_KEY_SALT', 'eX`oa*]elalQ^NqwWMlHA>Bm4a1Sw<*)ihFC$fwEq7pm`92qayoFy,Rxh)F(vN26' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
