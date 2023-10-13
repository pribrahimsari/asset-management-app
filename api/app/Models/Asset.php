<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;

    // one-to-one relation between
    public function type() {
        return $this->belongsTo('Type', "id");
    }
}
