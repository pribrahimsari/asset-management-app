<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    use HasFactory;

    protected $fillable = ["name", "description", "type_id", "addition_time", "priority"];

    // one-to-one relation between
    public function type() {
        return $this->belongsTo(Type::class);
    }
}
