<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Asset extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ["name", "description", "type_id", "addition_time", "priority"];
    protected $dates = ['deleted_at'];

    // one-to-one relation between
    public function type() {
        return $this->belongsTo(Type::class);
    }

    public function tags(){
        return $this->hasMany(Tag::class);
    }
    public function notes(){
        return $this->hasMany(Note::class);
    }
}
