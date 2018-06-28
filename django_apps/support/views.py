import grpc

from autogen import changelog_pb2_grpc, changelog_pb2
from django.shortcuts import render
from django.http import JsonResponse
from django.views import generic

class ChangeLogView(generic.View):
    def get(self, request, *args, **kwargs):
        print('ChangeLogView called')
        status = True
        payload = None
        channel = grpc.insecure_channel('localhost:50051')
        support_service = changelog_pb2_grpc.ChangeLogServiceStub(channel)

        try:
            response = support_service.getLog(changelog_pb2.LogRequest())
        except grpc.RpcError as e:
            print("Error raised: "+ e.details())
            return JsonResponse({status: False, message: "error"})

        if response:
            content ={
                status: True,
                payload: {
                    'content': response.content
                }
            }

        return JsonResponse(content)
