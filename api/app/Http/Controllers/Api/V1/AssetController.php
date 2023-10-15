<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Http\Resources\AssetResource;
use App\Http\Requests\StoreAssetRequest;
use App\Http\Requests\UpdateAssetRequest;
use Illuminate\Http\Request;

class AssetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $sortBy = $request->sortBy ?? "id-desc";

        $arr = explode("-",$sortBy);
        $orderBy = $arr[0];
        $order = $arr[1];

        return AssetResource::collection(Asset::orderBy($orderBy, $order)->paginate(20));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAssetRequest $request)
    {
        $validated = $request->validated();
        $notes = $validated["notes"];
        $tags = $validated["tags"];

        $asset = Asset::create($request->validated());

        // notes
        if(count($notes)>0){
            $asset->notes()->createMany($notes);
        }
        // tags
        if(count($tags)>0){
            $asset->tags()->createMany($tags);
        }
        //
        return AssetResource::make($asset);
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset)
    {
        //
        return AssetResource::make($asset);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAssetRequest $request, Asset $asset)
    {
        $asset->update($request->validated());
        return AssetResource::make($asset);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asset $asset)
    {
        $asset->delete();
        return response()->noContent();
    }
}
