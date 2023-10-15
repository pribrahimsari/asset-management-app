<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Note extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ["note"];
    protected $dates = ['deleted_at'];

    public function asset() {
        return $this->belongsTo(Asset::class);
    }
}
