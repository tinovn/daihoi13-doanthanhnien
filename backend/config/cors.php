<?php

declare(strict_types=1);

/**
 * CORS cho public API — cho phép frontend GitHub Pages gọi.
 */
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['GET', 'POST', 'OPTIONS'],
    'allowed_origins' => [
        'https://tinovn.github.io',
        'https://daihoi13.doanthanhnien.vn',
        'http://localhost:*',
    ],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 3600,
    'supports_credentials' => false,
];
