<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AssetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=>$this->id,
            "name"=>$this->name,
            "description"=>$this->description,
            "type_id"=>$this->type_id,
            "type"=>TypeResource::make($this->type),
            "tags"=>TagResource::collection($this->tags),
            "notes"=>NoteResource::collection($this->notes),
            "addition_time"=>$this->addition_time,
            "created_at"=>$this->created_at,
            "priority"=>$this->priority,
        ];
    }
}
