<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = [
        'store_name',
        'phone',
        'address',
        'description',
        'business_hours',
        'google_map_url',
        'adsense_footer',
    ];
}
